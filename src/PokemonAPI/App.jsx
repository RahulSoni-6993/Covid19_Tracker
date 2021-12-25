import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

    const [num, setNum] = useState(0);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    // const getPokemonData = async (num) => {
    //     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    //     console.log(res.data);
    // };
    useEffect(() => {
        const getPokemonData = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            // console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        };
        getPokemonData();
    });

    return(
        <>
            <h1>Data is fetched from POKEMON API</h1>
            <h3>Select Pokemon API</h3>
            <h2>Pokemon number is {num}</h2>
            <h2>Pokemon name is {name} and {moves} moves</h2>
            <select value={num} onChange={(e) => {setNum(e.target.value)}}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
        </>
    );  
};

export default App;