export const quotes = {
    classic: [
        "Mu. (Joshu’s Dog)",
        "What is the sound of one hand clapping?",
        "When both hands are clapped a sound is produced; listen to the sound of one hand.",
        "Does a dog have Buddha-nature? Joshu said: 'Mu.'",
        "If you meet the Buddha, kill the Buddha.",
        "The mind is like the moon reflected in water; the water is ever flowing, the moon ever staying."
    ],
    paradox: [
        "Without speaking, without silence, how can you express the truth?",
        "What was your original face before your parents were born?",
        "When you can do nothing, what can you do?",
        "When the many are reduced to one, to what is the one reduced?",
        "Stop the sound of the distant temple bell.",
        "What is the color of wind?"
    ],
    simple: [
        "A monk asked: 'What is Buddha?' Master replied: 'Three pounds of flax.'",
        "The wild geese do not intend to cast their reflection; the water has no mind to receive their image.",
        "Every day is a good day.",
        "No water, no moon.",
        "The whole earth is medicine.",
        "When walking, just walk. When sitting, just sit. Above all, don’t wobble."
    ]
};

export const getAllQuotes = () => {
    // Object.values(quotes) creates [['x', ... ], ['y', ...], ... ]
    // .flat() turns it into a single array: ['x', ..., 'y', ...]
    return Object.values(quotes).flat();
};
