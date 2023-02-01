import { DoFPass, DoFSettings, FinalPass, FinalPassSettings, FXAAPass } from "../main";
import { VFXPipeline, SupportedRenderer, VFXPipelineSettings} from "./VFXPipeline";

export type CommonPipelineSettings = {
    dof?:DoFSettings;
    final?:FinalPassSettings;
    enableFXAA?:boolean;
    enableDOF?:boolean;
    enableFinal?:boolean;
}

export class CommonVFXPipeline extends VFXPipeline {
    fxaa:FXAAPass;
    dof:DoFPass;
    final:FinalPass;

    constructor(rnd:SupportedRenderer, params:VFXPipelineSettings={
        width: window.innerWidth,
        height: window.innerHeight
    }, pipelineParams?:CommonPipelineSettings) {
        super(rnd, params);

        this.dof = new DoFPass(
            params.width,
            params.height,
            pipelineParams && pipelineParams.dof ? pipelineParams.dof : null
        );

        this.fxaa = new FXAAPass(
            params.width,
            params.height
        )

        this.final = new FinalPass(
            pipelineParams && pipelineParams.final ? pipelineParams.final : null
        );

        if(pipelineParams) {
            this.dof.enabled = pipelineParams.enableDOF !== undefined ? pipelineParams.enableDOF : true;
            this.fxaa.enabled = pipelineParams.enableFXAA !== undefined ? pipelineParams.enableFXAA : true;
            this.final.enabled = pipelineParams.enableFinal !== undefined ? pipelineParams.enableFinal : true;
        }

        this.addPass(this.dof);
        this.addPass(this.fxaa);
        this.addPass(this.final);
    }
}