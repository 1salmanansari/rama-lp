// js/constant.js

const PUMPS = [
    {
        id: 'centrifugal-pump',
        image: './assets/products/PUMP.png',
        name: 'Centrifugal Pump',
        desc: [
            'Powerful, durable, and light weight, but it also is multi-purpose as it provides optimal water pressure along with home pressure boosting system, it can be used in lawn sprinklers, overhead tanks and watering of gardens.',
            'Self Priming Regenerative mini monobloc pump fitted in compact design. Suction lift up to 8 mtrs is possible.',
            'It contains a shielded ball bearing which ensures less noise, and eliminates the need for lubrication and also contains Thermal overloa]d protector which protects the motor from overloading and protetcs it from risks of faulty currents.',
            'It is ideal for water supply in bungalows, apartments and hotels and has a long functioning life and is very easy to maintain.'
        ],
        paths: [
            './assets/products/PUMP.png',
            './assets/products/centrifugal-pump/2.png',
            './assets/products/centrifugal-pump/3.png',
            './assets/products/centrifugal-pump/4.png',
            './assets/products/centrifugal-pump/5.png',
        ],
        specs: [
            { label: 'HP', value: '1' },
            { label: 'PHASE', value: 'Single' },
            { label: 'Winding', value: 'Copper' },
            { label: 'TYPE', value: 'NRV' }
        ]
    },
    {
        id: 'vertical-motor',
        image: './assets/products/MOTOR.png',
        name: 'Vertical Motor',
        desc: [
            'An electric motor is an electrical machine that converts electrical energy into mechanical energy.',
            `Most electric motors operate through the interaction between the motor's magnetic field and electric current in a wire winding to generate force in the form of torque applied on the motor's shaft`
        ],
        paths: [
            './assets/products/MOTOR.png',
            './assets/products/vertical-motor/2.png',
            './assets/products/vertical-motor/3.png',
            './assets/products/vertical-motor/4.png',
            './assets/products/vertical-motor/5.png',
        ],
        specs: [
            { label: 'HP', value: '1' },
            { label: 'PHASE', value: 'Single' },
            { label: 'Winding', value: 'Copper' },
            { label: 'HEAD', value: '80 (Meters)' }
        ]
    },
    {
        id: 'self-priming-0-5',
        image: './assets/products/0.5_SP.png',
        name: 'Self Priming Pump',
        desc: [
            'Water Pumps are mostly driven by an electrical motor. There are various types of pumps, some are portable while some are not and some are made to use for irrigation purpose, while some are just used to fill a well.',
            'Crompton motor pumps are sturdy, tried and true which is why they are sure to provide an unfailing and steadfast performance. The characteristics that make these pumps outstanding:',
            '1. They have an entirely enclosed drive mechanism',
            '2. These pumps can run on an electric motorised driven system.'
        ],
        paths: [
            './assets/products/0.5_SP.png',
            './assets/products/self-priming-0-5/2.png',
            './assets/products/self-priming-0-5/3.png',
            './assets/products/self-priming-0-5/4.png',
            './assets/products/self-priming-0-5/5.png',
        ],
        specs: [
            { label: 'HP', value: '0.5' },
            { label: 'PHASE', value: 'Single' },
            { label: 'Winding', value: 'Copper' },
            { label: 'HEAD', value: '12 (Meters)' }
        ]
    },
    {
        id: 'self-priming-1-0',
        image: './assets/products/1.0_SP.png',
        name: 'Self Priming Pump',
        desc: [
            'Self-priming water pump, commonly used in households, agriculture, and small-scale industries. It is compact, durable, and designed for lifting water efficiently from tanks, wells, or reservoirs.',
            'The pump has a sturdy cast iron body with a powerful motor, making it suitable for continuous operation and long-term use'
        ],
        paths: [
            './assets/products/1.0_SP.png',
            './assets/products/self-priming-1-0/2.png',
            './assets/products/self-priming-1-0/3.png',
            './assets/products/self-priming-1-0/4.png',
            './assets/products/self-priming-1-0/5.png',
        ],
        specs: [
            { label: 'HP', value: '1' },
            { label: 'PHASE', value: 'Single' },
            { label: 'Winding', value: 'Copper' },
            { label: 'HEAD', value: '26 (Meters)' }
        ]
    },
    {
        id: 'submersible-0-5',
        image: './assets/products/0.5_SUBMERSIBLE.png',
        name: 'Submersible Monoset Pump',
        desc: [
            'This compact and efficient 0.5 HP water pump is designed for domestic and light-duty applications. With its sturdy motor and durable body, it ensures reliable performance for supplying water to homes, small gardens, and overhead tanks.',
            'It operates quietly, consumes less power, and provides steady water flow, making it ideal for daily household needs'
        ],
        paths: [
            './assets/products/0.5_SUBMERSIBLE.png',
            './assets/products/submersible/2.png',
            './assets/products/submersible/3.png',
            './assets/products/submersible/4.png',
            './assets/products/submersible/5.png',
        ],
        specs: [
            { label: 'HP', value: '0.5' },
            { label: 'PHASE', value: 'Single/Three' },
            { label: 'Winding', value: 'Copper' },
            { label: 'HEAD', value: '18 (Meters)' }
        ]
    },
    {
        id: 'submersible-1-0',
        image: './assets/products/1.0_HP_SUBMERSIBLE.png',
        name: 'Submersible Monoset Pump',
        desc: [
            'The 1 HP water pump delivers powerful and consistent water flow, suitable for medium to large domestic and commercial applications.',
            'Built with robust materials, it is capable of lifting water to higher levels and handling continuous usage with ease.',
            'It’s perfect for bungalows, small buildings, farms, and commercial spaces requiring higher water pressure'
        ],
        paths: [
            './assets/products/1.0_HP_SUBMERSIBLE.png',
            './assets/products/submersible/2.png',
            './assets/products/submersible/3.png',
            './assets/products/submersible/4.png',
            './assets/products/submersible/5.png',
        ],
        specs: [
            { label: 'HP', value: '1' },
            { label: 'PHASE', value: 'Single/Three' },
            { label: 'Winding', value: 'Copper' },
            { label: 'HEAD', value: '30 (Meters)' }
        ]
    }
];

const NAVIGATIONS = [
    {
        type: 'link',
        href: '#',
        text: 'Home',
        className: 'nav-link active',
        dataPage: 'main'
    },
    {
        type: 'link',
        href: '#about',
        text: 'About',
        className: 'nav-link',
        dataSection: 'about'
    },
    {
        type: 'dropdown',
        href: '#products-section',
        text: 'Products',
        className: 'nav-link',
        dataSection: 'products-section',
        icon: 'fas fa-chevron-down dropdown-icon',
        dropdownItems: PUMPS.map((each) => (
            { href: '#', text: each.name, icon: 'fas fa-circle', dataPage: 'products', dataProduct: each.id }
        ))
    },
    {
        type: 'link',
        href: '#mission',
        text: 'Mission',
        className: 'nav-link',
        dataSection: 'mission'
    },
    {
        type: 'link',
        href: '#contact',
        text: 'Contact',
        className: 'nav-link',
        dataSection: 'contact'
    }
];
