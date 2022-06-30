const apples = 20;
const oranges = 30;

const applesGleichOranges = apples === oranges;
console.log({ applesGleichOranges });

const applesNichtGleichOranges = apples !== oranges;
console.log({ applesNichtGleichOranges });

const applesGroesserOranges = apples > oranges;
console.log({ applesGroesserOranges });

const applesKleinerGleichOranges = apples <= oranges;
console.log({ applesKleinerGleichOranges });

const orangesGroesserApples = oranges > apples;
console.log({ orangesGroesserApples });

const mangoes = 5;
const mangoesMalApples = mangoes * apples;
const mangoesPlusOranges = mangoes + oranges;
const malGroesserAlsPlus = mangoesMalApples > mangoesPlusOranges;
console.log({ malGroesserAlsPlus });

const applesMinusMangoes = apples - mangoes;
const orangesDurchMangoes = oranges / mangoes;
const minusKleinerAlsDurch = applesMinusMangoes < orangesDurchMangoes;
console.log({ minusKleinerAlsDurch });

// Der UND Operator && gibt true wenn beide Seiten true sind.
// Sonst false
// true && true = true
// true && false = false
// false && false = false
const alleDreiGleich = mangoes === apples && mangoes === oranges;
console.log({ alleDreiGleich });

const resteGleich = apples % mangoes === oranges % mangoes;
console.log({ resteGleich });

const mangoesPlusApples = mangoes + apples;
const orangesMinusMangos = oranges - mangoes;
const plusGroesserMinus = mangoesPlusApples === orangesMinusMangos;
console.log({ plusGroesserMinus });
