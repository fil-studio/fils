float brightness = dot(oGlow.rgb, vec3(0.2126, 0.7152, 0.0722));
if(brightness <= 1.0) oGlow = vec4(0.);