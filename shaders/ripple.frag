#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 scaledTexCoord = texcoord * 2.0f - 1.0f;
    float radius  = length(scaledTexCoord);
    vec2 offset = scaledTexCoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    vec2 finalTextCoord = texcoord + offset;
    FragColor = texture(image, finalTextCoord);
}
