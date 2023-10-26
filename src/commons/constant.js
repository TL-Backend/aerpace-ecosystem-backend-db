exports.constants = {
    DEVICE_TYPES: ["CAR", "DRONE"],
    USER_TYPES: ["STAFF", "MEMBER"],
    DEVICE_STATUS: ["ACTIVE", "INACTIVE", "DRAFT"],
    PERSONALITIES: ["OWNER", "GUEST", "DRIVER"],
    DEVICE_LEVELS: ["MODEL", "VARIANTS", "VERSIONS"],
    APP_TYPES: ["ADMIN_PORTAL","MOBILE_APP"]
}

exports.defaultValues = {
    DEFAULT_PAGE_LIMIT: '10',
    DEFAULT_PAGE_NUMBER: '1',
}

exports.dbTables = {
    USERS_TABLE: `aergov_users`
}