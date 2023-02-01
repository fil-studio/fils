float d_rand(vec2 co){
	return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float dithering(vec2 st,float intensity){
	return mix(-intensity / 255.,intensity / 255.,d_rand(st));
}