const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'Bronze V': 0,
    'Bronze IV': 30,
    'Bronze III': 60,
    'Bronze II': 90,
    'Bronze I': 120,
    'Elite V': 200,
    'Elite IV': 230,
    'Elite III': 260,
    'Elite II': 290,
    'Elite I': 320,
    'Master V': 330,
    'Master IV': 360,
    'Master III': 390,
    'Master II': 420,
    'Master I': 430,
    'Grand Master V': 460,
    'Grand Master IV': 490,
    'Grand Master III': 520,
    'Grand Master II': 530,
    'Grand Master I': 560,
    'Epic V': 590,
    'Epic IV': 620,
    'Epic III': 630,
    'Epic II': 660,
    'Epic I': 690,
    'Legend V': 720,
    'Legend IV': 730,
    'Legend III': 760,
    'Legend II': 790,
    'Legend I': 820,
    'Mythic V': 830,
    'Mythic IV': 860,
    'Mythic III': 890,
    'Mythic II': 920,
    'Mythic I': 930,
    'Mythic Glory': 960,
    'EMERALD V': 990,
    'EMERALD IV': 1020,
    'EMERALD III': 1030,
    'EMERALD II': 1060,
    'EMERALD I': 1100,
    'THE EMERALD': 10000
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}