vec4 rgbSplit(sampler2D tex, vec2 uv, float strength, vec2 delta, vec2 maxV, bool radial) {
    vec2 dir = radial ? uv - vec2( .5 ) : vec2(1.);
    float d = strength * length( dir );
    normalize( dir );
    vec2 value = d * dir * delta;

    value.x = clamp(value.x, -maxV.x, maxV.x);
    value.y = clamp(value.y, -maxV.y, maxV.y);
    
    vec4 c1 = texture2D( tex, uv - value );
    vec4 c2 = texture2D( tex, uv );
    vec4 c3 = texture2D( tex, uv + value );

    return vec4( c1.r, c2.g, c3.b, c1.a + c2.a + c3.a );
}