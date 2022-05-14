#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texcoord = texcoord * 2.0f - 1.0f;
    float theta = atan(texcoord.y, texcoord.x);
    float radius = pow(length(texcoord), 1.5);
    texcoord = vec2(radius * cos(theta), radius * sin(theta));
    texcoord = (texcoord + 1.0f) * 0.5f;
    FragColor = texture(image, texcoord);
}
