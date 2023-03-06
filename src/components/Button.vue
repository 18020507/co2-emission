<template>
    <button v-on="$listener" class="buttonStyle">
        <font-awesome-icon :icon="buttonIcon" />
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        buttonText: {
            type: String,
            default: () => "Label",
        },
        buttonIcon: {
            type: String,
            default: () => "fa-solid fa-bars",
        },
    },
};
</script>

<style scoped>
.buttonStyle {
    background-color: green;
    text-align: center;
    font-size: 10px;
    color: white;
    border-radius: 6px;
    padding: 10px 25px;
    margin: 0px 10px;
}
</style>
