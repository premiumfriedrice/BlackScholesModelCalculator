<script>
    import CalculatorBody from "../components/CalculatorBody.svelte";
    import Header from "../components/Header.svelte";
    import SectionWrapper from "../components/SectionWrapper.svelte";
</script>

<div class="mx-auto min-h-screen lg:w-1/2 sm:w-5/6 px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
        <Header />
        <CalculatorBody />
    </div>
</div>
