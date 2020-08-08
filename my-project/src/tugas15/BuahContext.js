import React, { useState, createContext, useEffect } from "react";

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [daftarBuah, setDaftarBuah] =  useState(null)
    const [input, setInput]  =  useState({name: "", price: "", weight: 0})
    const [selectedId, setSelectedId]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("create")

    return (
      <BuahContext.Provider value={[daftarBuah, setDaftarBuah, input, setInput, selectedId, setSelectedId, statusForm, setStatusForm]}>
        {props.children}
      </BuahContext.Provider>
    );
};