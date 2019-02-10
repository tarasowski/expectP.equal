const error = async ({ counter, actual, expected, msg })  => {
    console.error('not ok', '#' + counter, msg, '\n\n', 'actual:\n', await actual, '\n\n', 'expected:\n', expected,  '\n')
    throw Error('Test failed!')
}

const success = ({ counter, msg }) =>
    console.log(`ok #${counter} ${msg}`)


const expectP = (counter =>  actual => (
    {
        toEqual: async (expected, msg = '') =>
            JSON.stringify(await actual) === JSON.stringify(expected)
                ? (counter++ , success({ counter, msg }))
                : (counter++ , error({ counter, actual, expected, msg }))
    }
))(0)


module.exports = { expectP }
