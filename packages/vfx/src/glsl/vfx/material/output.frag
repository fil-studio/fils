#include <output_fragment>

#ifdef USE_EMISSIVEMAP
    oGlow = vec4(totalEmissiveRadiance, emissiveColor.a);
#else
    oGlow = vec4(totalEmissiveRadiance, 1.0);
#endif