uniform float cameraNear;
uniform float cameraFar;

// Inlined from three's <packing> chunk. We can't `#include <packing>` because
// recent three (>=0.162) rewrote that chunk to use `modf`, a GLSL ES 3.00
// function — and these passes are RawShaderMaterials compiled as ES 1.00, so
// the include fails to compile even though we only need these two helpers.
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}

float readDepth (sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
	return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
}

float readZ (sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );

	return viewZ;
}