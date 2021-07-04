export const variants = {
    hidden: {
        height: 0
    },
    show: {
        height: 200
    }
}
export const socialcontainer = {
    hidden: {
        transition: {
            staggerChildren: 0.12
        }
    },
    show: {
        transition: {
            staggerChildren: .12
        }
    },


}
export const socialVariants = {
    hidden: {
        opacity: 0,
        y: 50

    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [.6, .01, -.05, .95]

        }
    },
    exit: {
        y: -10,
        opacity: 0,


    }

}