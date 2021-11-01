<template>
	<div :class="isTrue && 'success'"></div>
	<div :class="isTrue ? 'success': 'danger'"></div>
	<div :class="['success', 'danger']"></div>
	<div :class="[isTrue && 'success', isTrue ? 'success' : 'danger']"></div>
	<h2 :class="{
	  promoted: isPromoted,
	  new: !soldOut,
	  'soldOut': 'isSoldOut'
	}"></h2>
	<h1 :style="{
	 color: headerColor,
	 backgroundColor: red,
	 padding:'20px'
	}"></h1>
	<div :style="[headerStyle, FooterStyle]">array style binding</div>
</template>
