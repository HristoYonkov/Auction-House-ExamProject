const Pizza = require("../models/Pizza");

async function getAll() {
    return Pizza.find({});
}

async function getByUserId(userId) {
    return Pizza.find({ _ownerId: userId })

};
async function getById(id) {
    return Pizza.findById(id).populate('_ownerId')
    
};

async function create(data) {
    //TODO add user(creator) to pizza
    return Pizza.create(data)
};

async function getMyLikes(id) {
    const pizzas = await Pizza.find({})
    let arr = [];
    pizzas.map(x => {
        if (!!(x.likes.includes(id))) {
            arr.push(x)
        }
    })
    return arr;

}

async function update(id, pizza) {
    const existing = await Pizza.findById(id);
    existing.name = pizza.name;
    existing.type = pizza.type;
    existing.ingrediants = pizza.ingrediants;
    existing.prepTime = pizza.prepTime;
    existing.cookTime = pizza.cookTime;
    existing.recipe = pizza.recipe;
    existing.img = pizza.img;
    return existing.save()
}


async function deleteById(id) {
    return Pizza.findByIdAndDelete(id)
};

// async function getMyPizza(id) {
//     return await Pizza.find({ _ownerId: id })
// }

async function likePizza(pizzaId, userId) {
    const existing = await Pizza.findById(pizzaId)
    existing.likes.push(userId);
    return existing.save()
}
module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    getMyLikes,
    deleteById,
    // getMyPizza,
    likePizza
};
