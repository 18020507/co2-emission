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
            default: () => "",
        },
    },
};
</script>

<style scoped>
.buttonStyle {
    background-color: green;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: white;
    padding: 10px;
    border-radius: 5px;
    width: 112px;
    height: 36px;
    margin-left: 10px;
}
</style>
