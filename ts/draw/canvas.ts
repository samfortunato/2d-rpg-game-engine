const canvas: HTMLCanvasElement = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 768;

export { canvas };
export const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
