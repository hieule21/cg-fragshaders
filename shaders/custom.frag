#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);
    float randomColor = sin(dot(vec2(color.r, color.g),vec2(12.345,67.8910)))*1112.13141516;
    FragColor = vec4(vec3(randomColor), 1.0);
}
