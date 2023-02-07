uniform vec3 emissive;
uniform float emissiveIntensity;

#include <common>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>

#include <emissivemap_pars_fragment>

#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

layout (location = 1) out vec4 oGlow;

void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( vec3(0.), 1.0 );
	#include <logdepthbuf_fragment>
    vec3 outgoingLight = diffuseColor.rgb;
    vec3 totalEmissiveRadiance = emissive * emissiveIntensity;
    #include <emissivemap_fragment>
    outgoingLight = totalEmissiveRadiance;
	#include <output_fragment>
    oGlow = vec4(totalEmissiveRadiance, 1.0);
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}