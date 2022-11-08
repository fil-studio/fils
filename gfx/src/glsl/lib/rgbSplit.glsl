vec4 rgbSplit(sampler2D tex, vec2 uv, float strength, vec2 delta) {
    vec2 dir = uv - vec2( .5 );
    float d = strength * length( dir );
    normalize( dir );
    vec2 value = d * dir * delta;
    
    vec4 c1 = texture2D( tex, uv - value );
    vec4 c2 = texture2D( tex, uv );
    vec4 c3 = texture2D( tex, uv + value );

    return vec4( c1.r, c2.g, c3.b, c1.a + c2.a + c3.a );
}