<script>
    let St;
    let K;
    let r;
    let t;
    let o;
    let call = true;

    let err;

    let value = 0;

    const handleSubmit = async () => {
        console.log(St, K, r, t, o)
        try {
            const res = await fetch('http://localhost:5173/api/value.json', {
            method: 'POST',
            body: JSON.stringify({
                St: St,
                K: K,
                r: r,
                t: t,
                o: o,
                call: call
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            const data = await res.json();

            if (data){
                console.log(data);
                value = data.bspmValue;
            }
        }catch(error){
            console.log(error);
        }

       
    }
</script>

<div class="flex space-y-4 lg:sticky lg:top-0 h-dvh flex-col sm:mt-4">
    <h1 class="flex justify-center font-semibold text-4xl lg:mt-auto">{value}</h1>
    <form class="flex flex-col space-y-6 justify-center" on:submit|preventDefault={handleSubmit}>
        <div>
            <label for="St" class="block text-sm font-semibold leading-6 text-gray-600">Stock Price</label>
            <div class="mt-2 flex justify-between">
                <input bind:value={St} type="number" step=0.000000001 name="St" class="block w-4/5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <label for="St" class="place-content-center w-1/6 block text-sm opacity-70 leading-6 text-gray-500">Ex.: 62.0</label>
            </div>
        </div>
        <div>
            <label for="K" class="block text-sm font-semibold leading-6 text-gray-600">Exercise Price</label>
            <div class="mt-2 flex justify-between">
                <input bind:value={K} type="number" step=0.000000001 name="K" class="block w-4/5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <label for="K" class="place-content-center w-1/6 block text-sm opacity-70 leading-6 text-gray-500">Ex.: 60.0</label>
            </div>
        </div>
        <div>
            <label for="r" class="block text-sm font-semibold leading-6 text-gray-600">Interest Rate</label>
            <div class="mt-2 flex justify-between">
                <input bind:value={r} type="number" step=0.000000001 name="r" class="block w-4/5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <label for="r" class="place-content-center w-1/6 block text-sm opacity-70 leading-6 text-gray-500">Ex.: 0.04</label>
            </div>
        </div>
        <div>
            <label for="t" class="block text-sm font-semibold leading-6 text-gray-600">Time to maturity</label>
            <div class="mt-2 flex justify-between">
                <input bind:value={t} type="number" step=0.000000001 name="t" class="block w-4/5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <label for="t" class="place-content-center w-1/6 block text-sm opacity-70 leading-6 text-gray-500">Ex.: 0.11</label>
            </div>
        </div>
        <div>
            <label for="o" class="block text-sm font-semibold leading-6 text-gray-600">Volatility</label>
            <div class="mt-2 flex justify-between">
                <input bind:value={o} type="number" step=0.000000001 name="o" class="block w-4/5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <label for="o" class="place-content-center w-1/6 block text-sm opacity-70 leading-6 text-gray-500">Ex.: 0.32</label>
            </div>
        </div>
        <button
            class="mt-12 shadow-sm ring-1 ring-inset ring-gray-300 border-0 relative overflow-hidden px-5 py-2 group rounded-md bg-slate-white text-gray-950 sm:text-sm sm:leading-6"
            type="submit"
            >
            <div
                class="absolute top-0 right-full w-full h-full bg-sky-600 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="font-bold relative z-9">Calculate</h4>
        </button>

    </form>
</div>
