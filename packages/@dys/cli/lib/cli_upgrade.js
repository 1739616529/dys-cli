const { check_version, compare_version } = require('../util/tools')
const { version } = require('../dysconfig')
function cli_upgrade() {
	return check_version('vue').then((res) => {
		return compare_version(version, res)
	})
}

module.exports = cli_upgrade
