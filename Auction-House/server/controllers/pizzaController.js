const pizzaController = require("express").Router();

const { getAll, create, getById, getByUserId, getMyLikes, likePizza, update } = require("../services/pizzaService");

pizzaController.get("/", async (req, res) => {
    try {
        const pizza = await getAll();
        res.status(200).json(pizza);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

pizzaController.get('/my-pizzas', async (req, res) => {
    const pizzas = await getByUserId(req.user._id);
    res.status(200).json(pizzas)
});

pizzaController.get('/my-likes', async (req, res) => {
    try {
        const pizzas = await getMyLikes(req.user._id)
        return res.status(200).json(pizzas)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

pizzaController.get('/:id', async (req, res) => {
    try {
        const pizza = await getById(req.params.id)
        if (!pizza) {
            throw new Error('Pizza does not exist')

        }
        return res.status(200).json(pizza)
    } catch (error) {
        res.status(400).json({ error })

    }
});

pizzaController.post("/", async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        const pizza = await create(data);
        //todo error
        res.json(pizza)
    } catch (error) {
        // const message = parseError(err)
        console.log(error);
        res.status(400).json({ error: error.message })
    }
    res.end()
});


pizzaController.put('/:id', async (req, res) => {
    try {
        const pizza = await getById(req.params.id);
        if (req.user._id != pizza._ownerId._id) {
            return res.status(403).json({ message: 'You cannot modify this record' })
        }
        const result = await update(req.params.id, req.body);
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        // const message = parseError(err)
        res.status(400).json({ error: err.message })
    }
});


pizzaController.delete('/:id', async (req, res) => {
    try {
        const pizza = await getById(req.params.id);
        if (req.user._id != pizza._ownerId._id) {
            return res.status(403).json({ err: err.message })
        }
        await deleteById(req.params.id);
        res.status(204).end()
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
});

pizzaController.get('/like/:id', async (req, res) => {
    try {
        const pizza = await getById(req.params.id)
        if (pizza._ownerId._id != req.user._id
            && pizza.likes.map(x => x.includes(req.user?._id) == false)) {
            try {
                await likePizza(req.params.id, req.user._id);
                const pizza = await getById(req.params.id)
                return res.status(200).json(pizza)
            } catch (error) {
                res.status(400).json({ err: error.message })
            }
        }
    } catch (error) {
        res.status(400).json({ err: error.message })

    }
});


module.exports = {
    pizzaController
}
