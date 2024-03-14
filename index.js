export function viteConfig(options) {
    return {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [
                        `@import "@chrisofnormandy/confetti/_pack.scss";`,
                        options.scss || ''
                    ].join('\n')
                }
            }
        }
    };
}
export const palettes = [
    'indian_red',
    'mindaro',
    'navy',
    'pink',
    'rust',
    'syracuse',
    'tea_green',
    'tomato'
];
