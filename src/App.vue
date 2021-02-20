<template>
  <div>
    <img v-bind:src="url" />
    <ul>
      <li v-for='(item,index) in arr'
          :key='index'>
        <input type="checkbox"
               :value='index'
               v-model="a" />
        {{item}} {{index}}
      </li>
    </ul>

    {{a}}
  </div>
</template>

<script>

export default {
  data () {
    return {
      url: require("./assets/u.png"),
      a: [],
      arr: ['a', 'b', 'c']
    }
  }
}
</script>

<style>
</style>
