<script lang="ts" setup>
  import { reactive } from 'vue';
  import { useCreateUser, useGetAllUser } from '@/composables';
  import { type IUserForm } from '@/models';
  import { CardContainer, ParticipationForm, SectionTitle, UserParticipation } from '@components/index';

  const { data, refetch } = useGetAllUser();

  const openData = reactive({
    newUser: true,
    userInfo: true,
  });

  const { mutate } = useCreateUser({ onSuccess: () => refetch() });

  const createUser = (user: IUserForm): void => {
    mutate({ ...user });
  };
</script>

<template>
  <div class="home-page">

    <card-container
      :class="{
        'home-page__card-container': true,
        'home-page__card-container--hidden': !openData.newUser
       }"
    >

      <section-title
        title="Add new User"
        :open="openData.newUser"
        @change="openData.newUser = !openData.newUser"
      />

      <div
        :class="{
        'home-page__card-form-container': true,
        'home-page__card-form-container--hidden': !openData.newUser
       }"
      >
        <participation-form
          class="home-page__form"
          @submit="createUser"
        />

        <hr class="home-page__card-divider">

      </div>

      <div
        :class="{
          'home-page__card-content': true,
          'home-page__card-content--hidden': !openData.userInfo,
        }"
      >

        <section-title
          title="User Information"
          :open="openData.userInfo"
          @change="openData.userInfo = !openData.userInfo"
        />

        <user-participation
          v-if="(data?.data?.users?.length ?? 0) > 0 "
          class="home-page__card-information"
          :data="data?.data?.users ?? []"
          @change="refetch()"
        />

        <template v-else>
          <p class="home-page__not-found"> Nenhum dado localizado </p>
        </template>

      </div>

    </card-container>

  </div>
</template>

<style lang="scss" scoped>
@keyframes hide-scroll {
  from, to {
    overflow: auto;
  }
}

.home-page {
  &__card {
    &-container {
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      @include spacing(padding, 4);
    }

    &-form-container {
      overflow: hidden;
      transition: max-block-size 0.5s 0s ease-in-out;


      @include mq($from: desktop) {
        max-block-size: 107px;
      }

      @include mq($until: desktop) {
        max-block-size: 350px;
      }

      &--hidden {
        max-block-size: 0;
      }
    }

    &-divider {
      border: 0;
      border-top: 1px solid #A0A0A0;
      width: 100%;
    }

    &-content {
      @include spacing(padding-block, 3);
      flex: 1;
      inline-size: 100%;
      box-sizing: border-box;
      overflow: auto;
      max-block-size: 541px;
      transition: max-block-size 0.5s ease-in-out;
      animation: hide-scroll 1.2s backwards;

      &--hidden {
        max-block-size: 90px;
        overflow: hidden;

      }
    }

    &-information {
      @include spacing(margin-block-start, 3);
    }
  }

  &__not-found {
    @include spacing(margin-top, 10);
    text-align: center;
  }

  &__form {
    padding: 20px;
  }
}
</style>
