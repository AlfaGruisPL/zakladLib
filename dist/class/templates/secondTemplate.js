"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondTemplate = void 0;
class SecondTemplate {
    constructor() {
        this.logo = '';
        this.banner = '';
        this.title = '';
        this.descriptionOfEmpolyeeSubPage = '';
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
                    image1: 0,
                    image2: 0,
                    image3: 0 // Domyślne wartości dla image3
                }
            }
        };
        this.title = "";
        this.descriptionOfEmpolyeeSubPage = "";
    }
}
exports.SecondTemplate = SecondTemplate;
