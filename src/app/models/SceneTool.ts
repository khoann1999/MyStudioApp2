import { Scene } from './Scene';
import { Tool } from 'src/app/models/Tool';
export class SceneTool {
    id: number;
    sceneId: number;
    toolId: number;
    quantity: number;
    tool: Tool;
    scene: Scene;
}
