import React from 'react'
const Cart = () => (
    <div className="px-6 py-3 flex items-center flex-row gap-2">
        <h1 className="font-bold text-sm">Qty</h1>
        <div className="flex-1"></div>
        <div className="flex">
            <div className="flex justify-start gap-6 py-0">
                <InputCounter />
                <button className="btn btn-sm text-white btn-wide bg-blue-500">
                    Beli
                </button>
                <button className="btn btn-sm text-white font-normal btn-xl bg-gray-400">
                    + Favorite
                </button>
            </div>
        </div>
    </div>
);
export const InputCounter = () => {
    return (
        <div className="flex gap-1 items-center">
            <button className="btn btn-xs rounded-sm btn-outline border border-blue-400">
                -
            </button>
            <input className="input text-black border text-center bg-white border-gray-300 input-xs w-7 rounded-none" />
            <button className="btn btn-xs hover:text-white  rounded-sm btn-outline border border-blue-400">
                +
            </button>
        </div>
    );
};

export default Cart