const getWalls  = require('../app/attackOnGasparini')
const soldiers =  "[MRGRGRGGMMRGRRMMGMGGGGMRGGGRGMRRMGRGRGRGGMGGRRRRGMMGGMMMRRGMRRRRMMGRMMGMMGGRGRMGGGGMRM]"

it ('test', () => {
    expect(getWalls(86,17,1,14,16,soldiers)).toBe(68)
})