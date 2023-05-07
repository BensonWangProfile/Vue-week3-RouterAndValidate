<script setup>
import { Field as VField, Form as VForm, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

function isPhone(value) {
  if (!value) {
    return '請輸入手機號碼'
  }
  const err = /^09\d{8}$/.test(value) ? true : '請輸入正確手機號碼' //'請輸入正確手機號碼'
  return err
}

function isChinese(value) {
  const err = /^[\u4e00-\u9fa5]+$/.test(value) ? true : '請輸入中文'
  return err
}
</script>

<template>
  <div class="container w-60">
    <VForm v-slot="{ errors, meta, resetForm }" class="col border rounded-4 p-5">
      <label for="email" class="form-label col-8"
        >Eamil
        <VField
          name="email"
          class="form-control"
          label="信箱"
          type="email"
          rules="required|email"
          :class="{ '': !errors.email, 'is-invalid': errors.email }" />
        <ErrorMessage name="email" class="invalid-feedback"
      /></label>
      <label for="password" class="form-label col-8"
        >Password
        <VField
          name="password"
          class="form-control"
          label="密碼"
          type="password"
          rules="required|min:6"
          :class="{ '': !errors.password, 'is-invalid': errors.password }"
        />
        <ErrorMessage name="password" class="invalid-feedback" />
      </label>
      <label for="phone" class="form-label col-8"
        >Phone
        <VField
          name="phone"
          class="form-control"
          label="手機"
          :rules="isPhone"
          :class="{ '': !errors.phone, 'is-invalid': errors.phone }"
        />
        <ErrorMessage name="phone" class="invalid-feedback" />
      </label>
      <label for="shipping" class="form-label col-8"
        >Shipping Way
        <VField
          name="shipping"
          class="form-control"
          label="取貨方式"
          as="select"
          rules="required"
          :class="{ '': !errors.shipping, 'is-invalid': errors.shipping }"
        >
          <option value="店到店">店到店</option>
          <option value="來店取">來店取</option>
          <option value="宅配">宅配</option>
        </VField>
        <ErrorMessage name="shipping" class="invalid-feedback" />
      </label>
      <label for="note" class="form-label col-8"
        >備註
        <VField
          name="note"
          class="form-control"
          label="備註"
          as="textarea"
          :rules="isChinese"
          :class="{ '': !errors.note, 'is-invalid': errors.note }"
        />
        <ErrorMessage name="note" class="invalid-feedback" />
      </label>
      <div class="row gap-3">
        <button type="submit" class="btn btn-primary" :disabled="!meta.valid">送出</button>
        <button type="button" class="btn btn-primary" @click="resetForm">重置</button>
      </div>
      {{ errors }}
    </VForm>
  </div>
</template>

<style scoped>
.w-60 {
  width: 60%;
}
</style>
