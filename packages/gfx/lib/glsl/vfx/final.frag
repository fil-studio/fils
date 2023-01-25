precision highp float;

varying vec2 vUv;
uniform sampler2D tInput;
uniform float chromatic_aberration;

uniform bool enableCA;

vec4 ca (sampler2D tex, vec2 texCoord, float ca_amount) {
    vec2 red_offset = vec2(ca_amount, 0.0);
    vec2 green_offset = vec2(0.0, 0.0);
    vec2 blue_offset = vec2(-ca_amount, 0.0);

    vec4 red_color = texture2D(tex, texCoord + red_offset);
    vec4 green_color = texture2D(tex, texCoord + green_offset);
    vec4 blue_color = texture2D(tex, texCoord + blue_offset);

    return vec4(red_color.r, green_color.g, blue_color.b, 1.0);
}

void main () {
    vec4 color;
    if(enableCA) {
         color = ca(tInput, vUv, chromatic_aberration);
    } else {
        color = texture2D(tInput, vUv);
    }
    gl_FragColor = color;
}