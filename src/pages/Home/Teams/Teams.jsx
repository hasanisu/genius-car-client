import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TeamMebmers from './TeamMebmers';

const Teams = () => {
    const [members, setMembers] = useState([]);
    useEffect(()=>{
        fetch('teams.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-600 mb-5'>Team</p>
                <h1 className='text-5xl mb-5 font-bold'>Meet Our Team</h1>
                <p className='text-lg text-base-400'>the majority have suffered alteration in some form, by injected humour, or randomised
                <br />
                    words which don't look even slightly believable. 
                </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    members.map(member =><TeamMebmers
                    key={member._id}
                    member={member}
                    ></TeamMebmers>)
                }
            </div>
        </div>
    );
};

export default Teams;