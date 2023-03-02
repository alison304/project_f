const Category = require("../models/category.model");

module.exports.getCategoryList = async (req, res) => {
    try {
        const categoryList = await Category.find();
        res.json({
            message: 'Se entregan de manera exitosa todos las categorias',
            categoryList,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    };
}
