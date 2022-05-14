#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    FragColor.x = round(FragColor.x *4.0)/4.0;
    FragColor.y = round(FragColor.y *4.0)/4.0;
    FragColor.z = round(FragColor.z *4.0)/4.0;
    FragColor.a = 1.0f;
}
