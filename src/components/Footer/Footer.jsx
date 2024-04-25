import { faker } from "@faker-js/faker"
import FooterTag from "./FooterTag"

const Footer = () => {
    const footers = [
        {
            title: 'About Us',
            id: faker.string.uuid(),
            paths:[
                {
                    pathId: faker.string.uuid(),
                    name:'Snuxr Pvt Ltd',
                    link: "/"
                },
                {
                    pathId: faker.string.uuid(),
                    name:'Learn More',
                    link: "/"
                },
            ]
        },
        {
            title: 'Connect with Us',
            id: faker.string.uuid(),
            paths:[
                {
                    pathId: faker.string.uuid(),
                    name:'Facebook',
                    link: "/"
                },
                {
                    pathId: faker.string.uuid(),
                    name:'Twitter',
                    link: "/"
                },
                {
                    pathId: faker.string.uuid(),
                    name:'Instagram',
                    link: "/"
                },
            ]
        },
        {
            title: 'Policies',
            id: faker.string.uuid(),
            paths:[
                {
                    pathId: faker.string.uuid(),
                    name:'Return Your Order',
                    link: "/"
                },
                {
                    pathId: faker.string.uuid(),
                    name:'Return, Refund, and Cancellation',
                    link: "/"
                },
                {
                    pathId: faker.string.uuid(),
                    name:'Terms and Conditions',
                    link: "/"
                },
                {
                    pathId: faker.string.uuid(),
                    name:'Privacy Policy',
                    link: "/"
                },
                {
                    pathId: faker.string.uuid(),
                    name:'Fraud Protection',
                    link: "/"
                },
            ]
        },

    ]

    const footerTags = footers.map((footer) => {
        return (
            <FooterTag key={footer.id} footerPaths={footer.paths}>{footer.title}</FooterTag>
        )
    })
    return (
        <div className="text-gray-100 flex flex-row justify-around items-start m-6 p-2">
            {footerTags}
        </div>
    )
}

export default Footer;
