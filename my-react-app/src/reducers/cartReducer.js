export const initialState = [];

export function cartReducer(state, action) {
    switch (action.type) {
        //Aggiunge un nuovo articolo (quantity = 1)
        case 'ADD_ITEM': {
            const alreadyInCart = state.some(
                (item) => item.name === action.payload.name
            );

            if (alreadyInCart) {
                // Se già presente, incrementa la quantità
                return state.map((item) =>
                    item.name === action.payload.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...state, { ...action.payload, quantity: 1 }];
        }

        //Rimuove un articolo specifico
        case 'REMOVE_ITEM':
            return state.filter((item) => item.name !== action.payload.name);

        //Modifica la quantità di un articolo
        case 'UPDATE_QUANTITY': {
            let qty = parseInt(action.payload.quantity, 10);

            // Gestione casi limite
            if (isNaN(qty)) return state;   // input non numerico
            if (qty < 1) qty = 1;           // niente negativi o zero

            return state.map((item) =>
                item.name === action.payload.name
                    ? { ...item, quantity: qty }
                    : item
            );
        }

        default:
            return state;
    }
}