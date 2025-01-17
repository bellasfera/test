'use server';

import { client } from '~/client';

import { formatFaqsCollection, MetafieldsQuery } from '../_data/component-data';

const getNextProductFaqs = async (
  productId: number,
  limit: number,
  endCursor?: string | null
) => {
  return {
    endCursor: null,
    faqs: [],
  };
};

export default getNextProductFaqs;
