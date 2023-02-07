import { RawShaderMaterial, ShaderChunk, WebGLRenderer, WebGLRenderTarget } from "three";
import { BlurPass, BlurSettings } from './BlurPass';
import { RenderPass } from './RenderPass';

import vert from '../../glsl/fbo.vert';
import frag from '../../glsl/vfx/dof.frag';
import depth from '../../glsl/lib/depth.glsl';
import { VFXPipeline } from "../VFXPipeline";

const SHADER = new RawShaderMaterial({
	vertexShader: vert,
	fragmentShader: frag,
	uniforms: {
		tInput: {value: null},
		tBlur: {value: null},
		tDepth: {value: null},
		cameraNear: {value: 0},
		cameraFar: {value: 100},
		aperture: {value: 1.5},
		focalDistance: {value: 1},
		debug: {value: false}
	}
})

export type DoFSettings = {
	blur?:BlurSettings;
	camNear?:number;
	camFar?:number;
	focalDistance?:number;
	aperture?:number;
}

const DEFAULTS:DoFSettings = {
	blur: {
		scale: 1,
		radius: 1,
		iterations: 4,
		quality: 2
	},
	camNear: 0,
	camFar: 100,
	focalDistance: 1,
	aperture: 5
}

export class DoFPass extends RenderPass {
	blurPass: BlurPass;
	
	constructor(width:number, height:number, settings?:DoFSettings) {
		super();
		this.blurPass = new BlurPass(
			null,
			width,
			height,
			settings && settings.blur ? settings.blur : DEFAULTS.blur);

		ShaderChunk.depth = depth;

		const s = settings ? settings : DEFAULTS;

		this.shader = SHADER.clone();
		for(const key in DEFAULTS) {
			if(!this.shader.uniforms[key]) continue;
			this.shader.uniforms[key].value = s[key] === undefined ? DEFAULTS[key] : s[key];
		}
	}

	setSize(width:number, height:number) {
		this.blurPass.setSize(width, height);
	}

	render(renderer:WebGLRenderer, composer:VFXPipeline, target:WebGLRenderTarget=null) {
		if(!this.enabled) return;
		this.blurPass.source = composer.read.texture;
		this.blurPass.renderInternal(renderer);
		this.shader.uniforms.tBlur.value = this.blurPass.texture;
		
		super.render(renderer, composer, target);
	}
}