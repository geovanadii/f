var body = document.body,
  canvas = document.getElementsByTagName("canvas")[0],
  ctx = canvas.getContext("2d");

O = ctx.getImageData(0, 0, (canvas.height = f = W = 256), f);
U = O.data;
data = {};
flower = [];

function J(p) {
  p[5] = Q = 0;
  for (j = 3; j--; )
    if (!data[(Q = (p[j] >>= 2) + Q * f)]) data[Q] = flower.push(p);
}
setInterval(function () {
  for (i = 1e3; i--; ) {
    c = (i % 42) * 1.35;
    H = T;
    T = Math.random();
    A = H * 2 - 1;
    B = T * 2 - 1;
    J([
      Math.sin(H * 7) * (o = 13 + 5 / (0.2 + Math.pow(T * 4, 4))) - T * 50,
      T * 550 + 500,
      (l = Math.cos(H * 7)) * o,
      (G = l / 7 + 0.5) - T / 4,
      G,
    ]);
    if (A * A + B * B < 1)
      if (c > 32) {
        J([
          (o = 0.5 / (H + 0.01) - H * 300) *
            Math.cos((n = (j = c & 1) ? 6 : 4)) +
            (w = T * -f) * Math.sin(n) +
            j * 630 -
            390,
          o * Math.sin(n) - w * Math.cos(n) + 999 - j * 350,
          Math.cos(B + A) * 99 - j * 50,
          (Math.pow((l = 1 - B * B), f * 6) +
            Math.cos(H + T) +
            Math.pow(Math.cos((o * H + o + (B > 0 ? w : -w)) / 25), 30) * l -
            H +
            2) /
            5,
          o / 1e3 + 0.7 - (o * w) / 3e5,
        ]);
        J([
          (o = H * 45 - 20) * Math.cos((l = c / 0.86)) +
            (w = T * T) * f * Math.sin(l),
          Math.cos(B / 2) * 99 - w * T * 60 + 436,
          o * Math.sin(l) - w * f * Math.cos(l),
          w * 0.3 + 0.3,
          T * 0.7,
        ]);
      } else
        J([
          (o = A * (2 - T) * (80 - c * 2)) * Math.cos(c) -
            (w =
              99 -
              Math.cos(A) * 120 -
              Math.cos(T) * (f - c * 5) +
              Math.cos(Math.pow(1 - T, 7)) * 50 +
              c * 2) *
              Math.sin(c),
          (B * 2 - Math.cos(Math.pow(T, 7)) + 9) * 50,
          o * Math.sin(c) + w * Math.cos(c),
          1 - T * 0.7,
          Math.pow(1 - T, 9) / 4,
        ]);
  }
  for (i = 0; i < f * f; Math[i++] = f) for (l = 4; l--; ) U[i * 4 + l] = 255;
  for (c = Math.cos(W), s = Math.sin(W), j = flower.length; j--; ) {
    (k = flower[j]),
      (x = k[0] * c + k[2] * s + 99),
      (z = k[0] * s - k[2] * c),
      (y = (k[1] - z * 0.4) << 8);
    for (i = 3; i--; )
      if (z < Math[(p = y - ~x + [0, 1, f][i])])
        for (Math[p] = z, l = 3; l--; ) U[p * 4 + l] = k[l + 3] * f;
  }
  ctx.putImageData(O, 0, 0);
  W += 0.03;
}, (T = 0));
