export const socialContainer = {
    show: {
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: .35,
            staggerChildren: .15,
            delayChildren: .6
        }
    }
}

export const item = {
    hidden: {
        y: 20,
        opacity: 0,

    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            staggerChildren: .15,
            duration: 1,
        }
    },

}

export const rightSideVariant = {
    hidden: {
        width: '0vw',
    },
    show: {

        width: '',
        transition: {
            duration: .3,
            ease: [.215, .61, .355, 1],
        }
    },
    


}

export const sideLeftVariant = {
    hidden: {
        x: -500,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5,
            delay: .8,
            ease: [.215, .61, .355, 1]

        }

    },


}
export const container = {
    hidden: {
        right: 0,
        top: 0,
        bottom: 0,
        width: '0vw'


    },
    show: {
        width: '',
        transition: {
            ease: [.215, .61, .355, 1],
            delay: .16,
            duration: .6,

        }
    },
    exit: {
        width: '0vw',
        transition: {
            ease: [.25, .46, .45, .94],

        }
    }

}
export const emailContainerItem = {
    hidden: {
        opacity: 0,
        x: 50,
        transition: {
        }
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1,
        }
    },

}