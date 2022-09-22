const d = document;
const $ = d.querySelector.bind(d);
const regl = createREGL();
const $code = sel => (
document.getElementById(sel) || {}).
textContent || "void main() {}";



const drawFrame = regl({
  frag: $code('fragmentShader'),
  vert: $code('vertexShader'),

  attributes: {
    position: [[-1, -1],
    [-1, 1],
    [1, -1],
    [1, -1],
    [-1, 1],
    [1, 1]] },


  uniforms: {
    color: [1, 0, 0],
    width: ctx => ctx.viewportWidth,
    height: ctx => ctx.viewportHeight,
    time: ctx => ctx.tick * .05 },


  count: 6 });


regl.frame(ctx => {
  regl.clear({
    color: [1, 1, 1, 1],
    depth: 1 });

  drawFrame();
});