export class SecondTemplate {

    logo: string | number = '';
    banner: string | number = '';
    aboutUs: {
        information: {
            title: string,
            shortDescription: string,
            mainDescription: string,
        },
        images: {
            mainImage: string,
            otherImages: {
                image1: number,
                image2: number,
                image3: number,
            },
        },
    };
    title: string = ''
    descriptionOfEmpolyeeSubPage = ''

    constructor() {
        // Ustawienie domyślnych wartości dla image1, image2, image3
        this.aboutUs = {
            information: {
                title: "",
                shortDescription: "",
                mainDescription: ""
            },
            images: {
                mainImage: "",
                otherImages: {
                    image1: 0, // Domyślne wartości dla image1
                    image2: 0, // Domyślne wartości dla image2
                    image3: 0  // Domyślne wartości dla image3
                }
            }
        };
        this.title = "";
        this.descriptionOfEmpolyeeSubPage = "";
    }
}
