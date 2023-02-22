import { DoFPass, DoFSettings, FinalPass, FinalPassSettings, FXAAPass } from "../main";
import { VFXPipeline, SupportedRenderer, VFXPipelineSettings } from "./VFXPipeline";
export type CommonPipelineSettings = {
    dof?: DoFSettings;
    final?: FinalPassSettings;
    enableFXAA?: boolean;
    enableDOF?: boolean;
    enableFinal?: boolean;
};
export declare class CommonVFXPipeline extends VFXPipeline {
    fxaa: FXAAPass;
    dof: DoFPass;
    final: FinalPass;
    constructor(rnd: SupportedRenderer, params?: VFXPipelineSettings, pipelineParams?: CommonPipelineSettings);
}
