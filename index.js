module.exports = function loadSecretsAsEnv ({ prefix = 'ENV_' } = {}) {
    const secrets = require('@cloudreach/docker-secrets')
    prefix = prefix.toUpperCase()

    Object.keys(secrets).forEach(key => {
        if (key.toUpperCase().indexOf(prefix) !== 0) {
            return
        }

        const envKey = key.substr(prefix.length).toUpperCase()
        process.env[envKey] = secrets[key]
    })
}