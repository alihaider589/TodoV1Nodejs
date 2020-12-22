module.exports.GetDate = function () {
    var today = new Date()
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    return today.toLocaleDateString('en-US', options)

}

module.exports.GetDay = function () {
    var today = new Date()

    var options = {
        weekday: 'long',
    }
    return today.toLocaleDateString('en-US', options)

}