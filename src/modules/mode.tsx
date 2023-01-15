// action type
export const DARK = 'mode/DARK' as const;
export const LIGHT = 'mode/LIGHT' as const;

// action creator
export const dark = () => ({
    type: DARK
});
export const light = () => ({
    type: LIGHT
});

type ModeAction = 
    | ReturnType<typeof dark>
    | ReturnType<typeof light>;

