const { ObjectId } = require('mongodb')

class contactService {
    constructor(client) {
        this.Contact = client.db().collection('contacts')
    }
}

module.exports = contactService